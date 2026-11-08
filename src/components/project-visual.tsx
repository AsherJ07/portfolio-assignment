import type { Project } from "@/data/portfolio";

const visualTitles: Record<Project["visual"], string> = {
  diagnostics: "Abstract diagnostic interface showing evidence converging on a root cause",
  creator: "Abstract creator landscape showing clustered content signals and an emerging opportunity",
  research: "Abstract multilingual research network comparing models, prompts, and confidence",
};

export function ProjectVisual({ type }: { type: Project["visual"] }) {
  return (
    <svg
      className={`project-visual project-visual--${type}`}
      viewBox="0 0 760 430"
      role="img"
      aria-labelledby={`${type}-visual-title`}
      preserveAspectRatio="xMidYMid meet"
    >
      <title id={`${type}-visual-title`}>{visualTitles[type]}</title>
      <rect width="760" height="430" rx="24" className="visual-bg" />
      <path d="M48 76h664M48 352h664" className="visual-rule" />

      {type === "diagnostics" ? (
        <>
          <g className="visual-panel">
            <rect x="48" y="108" width="194" height="208" rx="12" />
            <path d="M76 146h94M76 178h136M76 210h112M76 242h126M76 274h72" />
          </g>
          <g className="visual-node">
            <circle cx="365" cy="150" r="31" />
            <circle cx="365" cy="276" r="31" />
            <circle cx="518" cy="213" r="47" className="visual-node--focus" />
            <path d="M396 150c55 0 50 63 75 63M396 276c55 0 50-63 75-63" />
          </g>
          <g className="visual-status">
            <rect x="600" y="128" width="112" height="170" rx="12" />
            <circle cx="656" cy="177" r="18" />
            <path d="m647 177 6 6 13-15M622 225h68M622 251h46" />
          </g>
        </>
      ) : null}

      {type === "creator" ? (
        <>
          <g className="visual-orbits">
            <circle cx="270" cy="216" r="128" />
            <circle cx="270" cy="216" r="76" />
            <circle cx="270" cy="216" r="24" className="visual-node--focus" />
            <circle cx="178" cy="130" r="13" />
            <circle cx="357" cy="158" r="17" />
            <circle cx="201" cy="301" r="18" />
            <circle cx="387" cy="283" r="12" />
          </g>
          <g className="visual-bars">
            <rect x="478" y="260" width="30" height="56" rx="5" />
            <rect x="528" y="210" width="30" height="106" rx="5" />
            <rect x="578" y="164" width="30" height="152" rx="5" className="visual-node--focus" />
            <rect x="628" y="116" width="30" height="200" rx="5" />
            <path d="m487 212 62-38 45-44 70-28" />
          </g>
        </>
      ) : null}

      {type === "research" ? (
        <>
          <g className="visual-network">
            <path d="m116 150 126 66-126 69M242 216l134-92M242 216l134 92M376 124l134 92M376 308l134-92M510 216l132-77M510 216l132 77" />
            <circle cx="116" cy="150" r="26" />
            <circle cx="116" cy="285" r="26" />
            <circle cx="242" cy="216" r="42" className="visual-node--focus" />
            <circle cx="376" cy="124" r="31" />
            <circle cx="376" cy="308" r="31" />
            <circle cx="510" cy="216" r="42" />
            <circle cx="642" cy="139" r="25" />
            <circle cx="642" cy="293" r="25" />
          </g>
          <g className="visual-labels">
            <path d="M91 104h50M91 331h50M617 93h50M617 339h50" />
          </g>
        </>
      ) : null}
    </svg>
  );
}
