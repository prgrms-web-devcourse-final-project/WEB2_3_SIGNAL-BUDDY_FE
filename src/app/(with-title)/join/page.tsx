import { JoinForm } from "@/src/components/join-form/join-form";


export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-muted p-6 md:p-10 ">
      <div className="w-full max-w-sm md:max-w-3xl">
        <JoinForm />
      </div>
    </div>
  )
}