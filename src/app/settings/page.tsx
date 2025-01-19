"use client";

import { Header } from "@/components/header";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface UserData {
  name: string;
  username: string;
  email: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
  profileImage: string;
}

export default function SettingsPage() {
  const { toast } = useToast();
  const [userData, setUserData] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    dateOfBirth: "",
    presentAddress: "",
    permanentAddress: "",
    city: "",
    postalCode: "",
    country: "",
    profileImage: "/user.png",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch("/api/user/profile");

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load user data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsSaving(true);
      setError(null);

      const response = await fetch("/api/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const updatedData = await response.json();
      setUserData(updatedData);
      toast({
        title: "Success",
        description: "Profile updated successfully!",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update profile");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen bg-background">
        <div className="flex-1">
          <Header />
          <main className="p-6">
            <div className="flex items-center justify-center h-[calc(100vh-200px)]">
              <div className="text-lg">Loading...</div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <div className="bg-white p-4 md:p-8 rounded-3xl">
            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg">
                {error}
              </div>
            )}

            {/* Tabs */}
            <div className="flex gap-6 mb-8 border-b text-sm">
              <button className="pb-2 border-b-2 border-primary font-medium">Edit Profile</button>
              <button className="pb-2 text-muted-foreground">Preferences</button>
              <button className="pb-2 text-muted-foreground">Security</button>
            </div>

            {/* Profile Form */}
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile Picture Section */}
              <div className="flex-shrink-0 flex justify-center md:justify-start max-h-min">
                <div className="relative">
                  <Image
                    src={userData.profileImage}
                    alt="Profile"
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                  <button className="absolute -bottom-2 -right-2 p-2 bg-primary rounded-full shadow-lg hover:bg-primary/90">
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
              <form onSubmit={handleSubmit} className="flex-1 space-y-8">
                {/* Form Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      value={userData.name}
                      onChange={handleInputChange}
                      className="w-full p-2 rounded-2xl border bg-background text-light-gray-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">User Name</label>
                    <input
                      type="text"
                      placeholder="Enter username"
                      name="username"
                      value={userData.username}
                      onChange={handleInputChange}
                      className="w-full p-2 rounded-2xl border bg-background text-light-gray-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={userData.email}
                      onChange={handleInputChange}
                      className="w-full p-2 rounded-2xl border bg-background text-light-gray-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Password</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full p-2 rounded-2xl border bg-background text-light-gray-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Date of Birth</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={userData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full p-2 rounded-2xl border bg-background text-light-gray-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Present Address</label>
                    <input
                      type="text"
                      placeholder="Enter present address"
                      name="presentAddress"
                      value={userData.presentAddress}
                      onChange={handleInputChange}
                      className="w-full p-2 rounded-2xl border bg-background text-light-gray-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Permanent Address</label>
                    <input
                      type="text"
                      placeholder="Enter permanent address"
                      name="permanentAddress"
                      value={userData.permanentAddress}
                      onChange={handleInputChange}
                      className="w-full p-2 rounded-2xl border bg-background text-light-gray-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">City</label>
                    <input
                      type="text"
                      placeholder="Enter city"
                      name="city"
                      value={userData.city}
                      onChange={handleInputChange}
                      className="w-full p-2 rounded-2xl border bg-background text-light-gray-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Postal Code</label>
                    <input
                      type="text"
                      placeholder="Enter postal code"
                      name="postalCode"
                      value={userData.postalCode}
                      onChange={handleInputChange}
                      className="w-full p-2 rounded-2xl border bg-background text-light-gray-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Country</label>
                    <input
                      type="text"
                      placeholder="Enter country"
                      name="country"
                      value={userData.country}
                      onChange={handleInputChange}
                      className="w-full p-2 rounded-2xl border bg-background text-light-gray-blue"
                    />
                  </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSaving}
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSaving ? "Saving..." : "Save"}
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
