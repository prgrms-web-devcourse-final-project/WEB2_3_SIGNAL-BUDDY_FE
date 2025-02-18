"use server";

import webpush from "web-push";

webpush.setVapidDetails(
  "mailto:your-email@example.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!,
);

let subscription: webpush.PushSubscription | null = null;

function transformSubscription(
  sub: PushSubscription,
): webpush.PushSubscription {
  return {
    endpoint: sub.endpoint,
    expirationTime: sub.expirationTime,
    keys: {
      p256dh: sub.getKey("p256dh")
        ? btoa(String.fromCharCode(...new Uint8Array(sub.getKey("p256dh")!)))
        : "",
      auth: sub.getKey("auth")
        ? btoa(String.fromCharCode(...new Uint8Array(sub.getKey("auth")!)))
        : "",
    },
  };
}

export async function subscribeUser(sub: PushSubscription) {
  subscription = transformSubscription(sub);
  // Production 환경에서는 subscription을 데이터베이스에 저장하는 로직을 추가하세요.
  // 예: await db.subscriptions.create({ data: subscription })
  return { success: true };
}

export async function unsubscribeUser() {
  subscription = null;
  // Production 환경에서는 subscription을 데이터베이스에서 삭제하는 로직을 추가하세요.
  // 예: await db.subscriptions.delete({ where: { ... } })
  return { success: true };
}

export async function sendNotification(message: string) {
  if (!subscription) {
    throw new Error("No subscription available");
  }

  try {
    await webpush.sendNotification(
      subscription,
      JSON.stringify({
        title: "Test Notification",
        body: message,
        icon: "/icon.png",
      }),
    );
    return { success: true };
  } catch (error) {
    console.error("Error sending push notification:", error);
    return { success: false, error: "Failed to send notification" };
  }
}
