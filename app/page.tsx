import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* 头部 Logo 或 Banner */}
        <div className="flex flex-col items-center sm:items-start gap-4">
          <Image
            className="dark:invert"
            src="/IMG_6894.png" // 这里替换为你的机器人 Logo 路径
            alt="Discord 英雄联盟机器人"
            width={180}
            height={38}
            priority
          />
          <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
            Discord 英雄联盟机器人
          </h1>
        </div>

        {/* 主要功能展示 */}
        <ol className="list-inside list-decimal text-sm sm:text-base font-[family-name:var(--font-geist-mono)] leading-7 text-center sm:text-left">
          <li className="mb-2">
            <strong>战绩语音播报：</strong>在 Discord 语音频道中实时播报每局游戏的战绩。
          </li>
          <li className="mb-2">
            <strong>战绩排行榜：</strong>自动统计所有成员的游戏表现，生成排行榜并定期推送。
          </li>
          <li className="mb-2">
            <strong>MVP/战犯速报：</strong>每局游戏结束后即时统计谁是大腿、谁是战犯，一目了然。
          </li>
        </ol>

        {/* CTA 按钮 */}
        {/* <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            邀请到你的服务器
          </a>
        </div> */}
      </main>
    </div>
  );
}
