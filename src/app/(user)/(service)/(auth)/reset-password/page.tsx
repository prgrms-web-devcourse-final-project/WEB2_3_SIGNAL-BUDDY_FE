import { ResetPassword2 } from "@/src/components/reset-password2/reset-password2";


export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-muted p-6 md:p-10 ">
      <div className="w-full max-w-sm md:max-w-3xl">
        <ResetPassword2 />
      </div>
    </div>
  )
}