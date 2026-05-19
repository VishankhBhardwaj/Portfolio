"use client";
import { Terminal } from "@/components/ui/terminal";

export default function TerminalDemo() {
  return (
    <section className="w-full py-10 md:py-20" >
      <Terminal
        commands={[
          "npm install",
          "npm run dev",
          "Initializing portfolio...",
          "Connecting PostgreSQL database...",
          "Loading AI workflows...",
          "Deploying to Vercel...",
          "Portfolio live at vishankh.dev",
        ]}
        outputs={{
          0: [
            "added 387 packages in 6s",
            "found 0 vulnerabilities",
          ],

          1: [
            "▲ Next.js 16.2.6",
            "✓ Ready on http://localhost:3000",
          ],

          2: [
            "UI systems initialized ✔",
          ],

          3: [
            "Database connected successfully ✔",
          ],

          4: [
            "LangChain pipelines active ✔",
          ],

          5: [
            "Production build optimized ✔",
          ],

          6: [
            "Deployment completed successfully ✔",
          ],
        }}
        typingSpeed={45}
        delayBetweenCommands={1000} />
    </section>
  );
}
