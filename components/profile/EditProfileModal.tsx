"use client";

import { useState, useRef } from "react";
import { UserProfile } from "@/lib/types/profile";
import { HiXMark, HiCamera } from "react-icons/hi2";
import { locales } from "@/lib/i18n/locales";

type EditProfileModalProps = {
  profile: UserProfile;
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: Partial<UserProfile>) => void;
  lang: string;
};

export default function EditProfileModal({
  profile,
  isOpen,
  onClose,
  onSave,
  lang,
}: EditProfileModalProps) {
  const t = locales[lang as keyof typeof locales];
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: profile.name,
    email: profile.email,
    department: profile.department,
    position: profile.position,
  });
  const [avatarPreview, setAvatarPreview] = useState(profile.avatar);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 如果有新的头像文件，先上传
    const avatarUrl = profile.avatar;
    if (avatarFile) {
      // TODO: 实现文件上传
      // const formData = new FormData();
      // formData.append('avatar', avatarFile);
      // const response = await uploadAvatar(formData);
      // avatarUrl = response.url;
    }

    onSave({
      ...formData,
      avatar: avatarUrl,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        <div className="relative w-full max-w-md transform overflow-hidden rounded-lg bg-white shadow-xl transition-all">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {t.profile.editProfile}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500"
              >
                <HiXMark className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 头像上传 */}
              <div className="flex flex-col items-center">
                <div className="relative group">
                  <img
                    src={avatarPreview}
                    alt={formData.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={handleAvatarClick}
                    className="absolute inset-0 flex items-center justify-center 
                      bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <HiCamera className="w-6 h-6 text-white" />
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
                <span className="mt-2 text-sm text-gray-500">
                  {t.profile.clickToChange}
                </span>
              </div>

              {/* 其他表单字段保持不变 */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  {t.profile.name}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 
                    focus:border-theme-primary focus:outline-none focus:ring-1 focus:ring-theme-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 
                    focus:border-theme-primary focus:outline-none focus:ring-1 focus:ring-theme-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="department"
                  className="block text-sm font-medium text-gray-700"
                >
                  Department
                </label>
                <input
                  type="text"
                  id="department"
                  value={formData.department}
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 
                    focus:border-theme-primary focus:outline-none focus:ring-1 focus:ring-theme-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="position"
                  className="block text-sm font-medium text-gray-700"
                >
                  Position
                </label>
                <input
                  type="text"
                  id="position"
                  value={formData.position}
                  onChange={(e) =>
                    setFormData({ ...formData, position: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 
                    focus:border-theme-primary focus:outline-none focus:ring-1 focus:ring-theme-primary"
                />
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  {t.profile.cancel}
                </button>
                <button type="submit" className="btn-primary">
                  {t.profile.saveChanges}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
