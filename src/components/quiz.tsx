import { useState } from "react";
import { quiz } from "@/data/catalog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PreventionQuiz() {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const item = quiz[step];

  if (!item) return null;

  if (done) {
    return (
      <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
        <p className="font-display text-2xl text-fg">
          {score} / {quiz.length}
        </p>
        <p className="mt-2 text-muted">
          {score >= 4
            ? "Vous avez les bons ordres de grandeur. Le plus utile : les transmettre, et connaître le 0 800 23 13 13."
            : "L’essentiel : le produit a changé, le marché est violent, et l’aide existe — anonyme."}
        </p>
        <Button
          className="mt-5"
          variant="outline"
          onClick={() => {
            setStep(0);
            setPicked(null);
            setScore(0);
            setDone(false);
          }}
        >
          Recommencer
        </Button>
      </div>
    );
  }

  const revealed = picked !== null;

  return (
    <div className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-6">
      <p className="text-xs uppercase tracking-[0.16em] text-muted">
        Question {step + 1} / {quiz.length}
      </p>
      <h3 className="mt-2 font-display text-xl text-fg">{item.q}</h3>
      <ul className="mt-4 flex flex-col gap-2">
        {item.options.map((opt, i) => {
          const isAnswer = i === item.answer;
          const isPick = i === picked;
          return (
            <li key={opt}>
              <button
                type="button"
                disabled={revealed}
                onClick={() => {
                  setPicked(i);
                  if (i === item.answer) setScore((s) => s + 1);
                }}
                className={cn(
                  "flex min-h-12 w-full items-center rounded-md px-3 py-2 text-left text-sm transition-colors duration-150",
                  !revealed && "bg-surface-2 text-fg hover:shadow-[var(--shadow-border)]",
                  revealed && isAnswer && "bg-ok/20 text-fg",
                  revealed && isPick && !isAnswer && "bg-danger/20 text-fg",
                  revealed && !isAnswer && !isPick && "bg-surface-2 text-muted",
                )}
              >
                {opt}
              </button>
            </li>
          );
        })}
      </ul>
      {revealed ? (
        <div className="mt-4">
          <p className="text-sm text-muted">{item.explain}</p>
          <Button
            className="mt-4"
            onClick={() => {
              if (step + 1 >= quiz.length) setDone(true);
              else {
                setStep((s) => s + 1);
                setPicked(null);
              }
            }}
          >
            {step + 1 >= quiz.length ? "Voir le score" : "Question suivante"}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
