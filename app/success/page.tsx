import Image from "next/image";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center">
        {/* 成功图标 */}
        <div className="flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full">
          <svg
            className="w-10 h-10 text-green-600 dark:text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* 成功标题 */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-600 dark:text-green-400">
            打赏成功！
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-md">
            感谢您的支持！您的打赏将帮助我们持续改进 Discord 英雄联盟机器人。
          </p>
        </div>

        {/* 机器人 Logo */}
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/IMG_6894.png"
            alt="Discord 英雄联盟机器人"
            width={180}
            height={38}
            priority
          />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            您的支持让我们的机器人变得更好
          </p>
        </div>
        
        {/* 返回按钮 */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/"
          >
            返回主页
          </Link>
        </div>
      </main>
    </div>
  );
} 