"use client";

import { useState, useMemo } from "react";
import { terminalTabs } from "@/data/portfolioData";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function highlightSyntax(code: string, language: string): string {
  let highlighted = code
    // Escape HTML
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  if (language === "prisma") {
    highlighted = highlighted
      // Comments
      .replace(
        /(\/\/.*)/g,
        '<span class="token-comment">$1</span>'
      )
      // Prisma keywords
      .replace(
        /\b(model|enum|datasource|generator)\b/g,
        '<span class="token-keyword">$1</span>'
      )
      // Decorators
      .replace(
        /(@\w+)/g,
        '<span class="token-decorator">$1</span>'
      )
      // Types
      .replace(
        /\b(String|Int|Float|Boolean|DateTime|Json)\b/g,
        '<span class="token-type">$1</span>'
      )
      // Strings
      .replace(
        /(".*?")/g,
        '<span class="token-string">$1</span>'
      );
  } else if (language === "typescript") {
    highlighted = highlighted
      // Comments
      .replace(
        /(\/\/.*)/g,
        '<span class="token-comment">$1</span>'
      )
      // Strings
      .replace(
        /(".*?"|'.*?'|`.*?`)/g,
        '<span class="token-string">$1</span>'
      )
      // Keywords
      .replace(
        /\b(import|export|from|const|let|var|function|async|await|return|if|else|new|type|interface|class|extends|implements|typeof|in|of)\b/g,
        '<span class="token-keyword">$1</span>'
      )
      // Types
      .replace(
        /\b(string|number|boolean|void|null|undefined|Record|Promise|NextRequest|NextResponse)\b/g,
        '<span class="token-type">$1</span>'
      );
  }

  return highlighted;
}

export default function InteractiveTerminal() {
  const [activeTab, setActiveTab] = useState(terminalTabs[0].id);
  const sectionRef = useScrollReveal();

  const activeCode = useMemo(() => {
    const tab = terminalTabs.find((t) => t.id === activeTab);
    if (!tab) return { lines: [], highlighted: "" };
    const lines = tab.code.split("\n");
    const highlighted = highlightSyntax(tab.code, tab.language);
    return { lines, highlighted };
  }, [activeTab]);

  return (
    <div ref={sectionRef} className="terminal-section">
      <div className="container">
        <div className="terminal scroll-reveal-scale">
          {/* Title Bar */}
          <div className="terminal-titlebar">
            <div className="terminal-dots">
              <span className="terminal-dot" />
              <span className="terminal-dot" />
              <span className="terminal-dot" />
            </div>
            <div className="terminal-title">~/portfolio/src</div>
            <div />
          </div>

          {/* Tabs */}
          <div className="terminal-tabs">
            {terminalTabs.map((tab) => (
              <button
                key={tab.id}
                className={`terminal-tab ${
                  activeTab === tab.id ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Code Body */}
          <div className="terminal-body">
            <div className="terminal-code">
              <div className="terminal-line-numbers">
                {activeCode.lines.map((_, i) => (
                  <span key={i}>{i + 1}</span>
                ))}
              </div>
              <div
                className="terminal-content"
                dangerouslySetInnerHTML={{
                  __html: activeCode.highlighted,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
