import Image from "next/image";
import Link from "next/link";

import myPostit from "@/public/imgs/my-postit.svg";
import myFeedback from "@/public/imgs/my-feedback.svg";
import likedPostit from "@/public/imgs/liked-postit.svg";
import likedFeedback from "@/public/imgs/liked-feedback.svg";

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#64748B"
    className="size-6"
  >
    <path
      fillRule="evenodd"
      d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
      clipRule="evenodd"
    />
  </svg>
);

const activities = [
  {
    href: "/my-page/my-postits",
    icon: myPostit,
    label: "내가 작성한 포스트잇",
  },
  {
    href: "/my-page/my-postits",
    icon: likedPostit,
    label: "내가 좋아한 포스트잇",
  },
  {
    href: "/my-page/my-postits",
    icon: myFeedback,
    label: "내가 작성한 피드백",
  },
  {
    href: "/my-page/my-postits",
    icon: likedFeedback,
    label: "내가 좋아한 피드백",
  },
];

export default function Page() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-[400px] flex-col gap-5 pt-2">
        <section className="flex flex-col gap-2">
          <div className="flex h-10 items-center justify-between border-b border-gray-300">
            <h1 className="text-sm font-extrabold text-gray-700">
              나의 프로필
            </h1>
            <Link href="/my-page/settings">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#3F3F46"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <div className="flex items-center gap-4 rounded-[8px] bg-white px-2 py-3">
            <div className="flex aspect-square w-[54px] items-center justify-center rounded-full outline outline-1 outline-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#64748B"
                className="h-[30px] w-[30px]"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-gray-700">User</p>
              <p className="text-xs font-medium text-gray-500">
                example@gmail.com
              </p>
            </div>
          </div>
          <Link
            href="/profile-edit"
            className="flex h-10 items-center justify-center rounded-[8px] bg-teal text-sm font-bold text-white"
          >
            프로필 수정
          </Link>
        </section>
        <section className="rounded-[8px] bg-white px-2 pb-4 pt-3">
          <h2 className="mb-2 text-xs font-semibold text-gray-500">내 활동</h2>
          <ul className="flex flex-col gap-2">
            {activities.map(({ href, icon, label }, index) => (
              <li key={index}>
                <Link
                  href={href}
                  className="flex h-10 items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={icon}
                      width={30}
                      height={30}
                      alt={label}
                      loading="lazy"
                    ></Image>
                    <h3 className="font-medium text-gray-700">{label}</h3>
                  </div>
                  <ArrowIcon />
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-[8px] bg-white px-2 pb-4 pt-3">
          <h2 className="mb-2 text-xs font-semibold text-gray-500">
            최근 경로
          </h2>
          <ul className="flex flex-col gap-2">
            <li className="my-[10px]">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="flex aspect-square w-[40px] items-center justify-center rounded-full bg-teal">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#FFFFFF"
                      className="h-[24px] w-[24px]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">최근 목적지 이름</p>
                    <p className="text-xs font-medium text-gray-500">
                      최근 목적지 주소
                    </p>
                  </div>
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full outline outline-1 outline-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#CED1D8"
                    className="w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
