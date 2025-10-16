import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return  <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <SignUp
        appearance={{
          elements: {
            formButtonPrimary: "bg-indigo-600 hover:bg-indigo-700 text-white",
            card: "shadow-lg border border-gray-200 rounded-lg",
          },
        }}
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
      />
    </div>
}