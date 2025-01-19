import { Header } from "@/components/header";
import Image from "next/image";

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex-1">
        <Header />
        <main className="p-6 ">
          <div className=" bg-white p-8 rounded-3xl">
            {/* Tabs */}
            <div className="flex gap-6 mb-8 border-b">
              <button className="pb-2 border-b-2 border-primary font-medium">Edit Profile</button>
              <button className="pb-2 text-muted-foreground">Preferences</button>
              <button className="pb-2 text-muted-foreground">Security</button>
            </div>

            {/* Profile Form */}
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile Picture Section */}
              <div className="flex-shrink-0 flex justify-center md:justify-start">
                <div className="relative">
                  <Image
                    src="/user.png"
                    alt="Profile"
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                  <button className="absolute bottom-0 right-0 p-1 bg-primary rounded-full">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Form */}
              <form className="flex-1 space-y-8">
                {/* Form Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full p-2 rounded-md border bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">User Name</label>
                    <input
                      type="text"
                      placeholder="Enter username"
                      className="w-full p-2 rounded-md border bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      placeholder="Enter email"
                      className="w-full p-2 rounded-md border bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Password</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full p-2 rounded-md border bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Date of Birth</label>
                    <input type="date" className="w-full p-2 rounded-md border bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Present Address</label>
                    <input
                      type="text"
                      placeholder="Enter present address"
                      className="w-full p-2 rounded-md border bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Permanent Address</label>
                    <input
                      type="text"
                      placeholder="Enter permanent address"
                      className="w-full p-2 rounded-md border bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">City</label>
                    <input
                      type="text"
                      placeholder="Enter city"
                      className="w-full p-2 rounded-md border bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Postal Code</label>
                    <input
                      type="text"
                      placeholder="Enter postal code"
                      className="w-full p-2 rounded-md border bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Country</label>
                    <input
                      type="text"
                      placeholder="Enter country"
                      className="w-full p-2 rounded-md border bg-background"
                    />
                  </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
