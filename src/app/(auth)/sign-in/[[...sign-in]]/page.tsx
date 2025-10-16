import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return   <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: "bg-indigo-600 hover:bg-indigo-700 text-white", // customize button
            card: "shadow-lg border border-gray-200 rounded-lg", // customize container
          },
          layout: {
            logoImageUrl: "/logo.png", // custom logo
            socialButtonsPlacement: "bottom", // move social buttons
          },
        }}
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
      />
    </div>
}