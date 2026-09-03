"use client";

/** Hand-drawn style engineering diagrams (pure SVG, no illustration artwork). */

const STAGES = [
  { key: "network", label: "Network", note: "RAN · Fiber" },
  { key: "edge", label: "Edge", note: "Gateway" },
  { key: "sensors", label: "Sensors", note: "Gas · IMU" },
  { key: "intel", label: "Intelligence", note: "ML model" },
];

/** Hero visual: Network → Edge → Sensors → Intelligence signal chain. */
export function SystemChain() {
  return (
    <figure className="w-full">
      <svg
        viewBox="0 0 420 300"
        role="img"
        aria-label="System diagram: network to edge to sensors to intelligence"
        className="w-full text-foreground"
      >
        <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.9">
          {STAGES.map((stage, i) => {
            const y = 26 + i * 68;
            return (
              <g key={stage.key} className="fade-in-up" style={{ ["--anim-delay" as string]: `${320 + i * 110}ms` }}>
                <rect x="18" y={y} width="200" height="42" opacity="0.55" />
                <text
                  x="34"
                  y={y + 19}
                  fontSize="11"
                  fontWeight="500"
                  letterSpacing="0.02em"
                  fill="currentColor"
                  stroke="none"
                >
                  {stage.label}
                </text>
                <text
                  x="34"
                  y={y + 33}
                  fontSize="8.5"
                  letterSpacing="0.14em"
                  fill="var(--muted-foreground)"
                  stroke="none"
                >
                  {stage.note.toUpperCase()}
                </text>
                <circle cx="206" cy={y + 21} r="2.5" fill="var(--accent)" stroke="none" />
                {i < STAGES.length - 1 && (
                  <path
                    d={`M 118 ${y + 42} L 118 ${y + 68}`}
                    pathLength={1}
                    className="draw-line"
                    style={{ ["--draw-delay" as string]: `${420 + i * 110}ms` }}
                    stroke="var(--border-strong)"
                  />
                )}
              </g>
            );
          })}

          {/* feedback bus back to the network layer */}
          <path
            d="M 218 253 L 300 253 L 300 47 L 218 47"
            pathLength={1}
            className="draw-line"
            style={{ ["--draw-delay" as string]: "820ms" }}
            stroke="var(--accent)"
            strokeOpacity="0.6"
            strokeDasharray="1"
          />
          <text
            x="308"
            y="150"
            fontSize="8.5"
            letterSpacing="0.14em"
            fill="var(--muted-foreground)"
            stroke="none"
          >
            FEEDBACK
          </text>
        </g>
      </svg>
      <figcaption className="label-eyebrow mt-4">Fig. 01 — end-to-end signal chain</figcaption>
    </figure>
  );
}

/** Featured project visual: AERIS rescue robot architecture + gas classification. */
export function AerisArchitecture() {
  const readings = [14, 22, 19, 31, 44, 38, 57, 72, 61, 83, 76, 91, 68, 49, 37, 28];

  return (
    <figure className="w-full">
      <svg
        viewBox="0 0 560 360"
        role="img"
        aria-label="AERIS architecture: gas sensors and controller feeding a wireless link and machine learning classifier"
        className="w-full text-foreground"
      >
        <g stroke="currentColor" fill="none" strokeWidth="1">
          {/* sensor bank */}
          <text x="24" y="26" fontSize="8.5" letterSpacing="0.14em" fill="var(--muted-foreground)" stroke="none">
            SENSOR BANK
          </text>
          {["MQ-2", "MQ-7", "MQ-135", "DHT22"].map((s, i) => (
            <g key={s} opacity="0.85">
              <rect x="24" y={40 + i * 34} width="96" height="24" opacity="0.6" />
              <text x="34" y={56 + i * 34} fontSize="9.5" fill="currentColor" stroke="none">
                {s}
              </text>
              <path d={`M 120 ${52 + i * 34} L 176 ${52 + i * 34}`} stroke="var(--border-strong)" />
            </g>
          ))}

          {/* controller */}
          <rect x="176" y="40" width="104" height="126" opacity="0.7" />
          <text x="190" y="62" fontSize="10" fontWeight="500" fill="currentColor" stroke="none">
            ESP32
          </text>
          <text x="190" y="78" fontSize="8.5" letterSpacing="0.12em" fill="var(--muted-foreground)" stroke="none">
            ADC · DRIVE
          </text>
          <path d="M 190 92 L 266 92" stroke="var(--border)" />
          <text x="190" y="112" fontSize="9.5" fill="currentColor" stroke="none">
            Motor control
          </text>
          <text x="190" y="130" fontSize="9.5" fill="currentColor" stroke="none">
            Telemetry pack
          </text>
          <circle cx="266" cy="152" r="2.5" fill="var(--accent)" stroke="none" />

          {/* wireless link */}
          <path d="M 280 103 L 344 103" stroke="var(--accent)" strokeOpacity="0.7" />
          {[0, 1, 2].map((i) => (
            <path
              key={i}
              d={`M ${300 + i * 12} 92 q 6 11 0 22`}
              stroke="var(--accent)"
              strokeOpacity={0.5 - i * 0.12}
            />
          ))}
          <text x="292" y="82" fontSize="8.5" letterSpacing="0.14em" fill="var(--muted-foreground)" stroke="none">
            WIRELESS
          </text>

          {/* base station / RPi */}
          <rect x="344" y="40" width="192" height="126" opacity="0.7" />
          <text x="358" y="62" fontSize="10" fontWeight="500" fill="currentColor" stroke="none">
            Raspberry Pi — Inference
          </text>
          <text x="358" y="78" fontSize="8.5" letterSpacing="0.12em" fill="var(--muted-foreground)" stroke="none">
            RANDOM FOREST · 3 CLASSES
          </text>
          {[
            { l: "SAFE", w: 46 },
            { l: "WARNING", w: 92 },
            { l: "HAZARD", w: 148 },
          ].map((c, i) => (
            <g key={c.l}>
              <text x="358" y={102 + i * 22} fontSize="9" fill="var(--muted-foreground)" stroke="none">
                {c.l}
              </text>
              <rect x="414" y={94 + i * 22} width={c.w} height="8" fill="var(--accent)" stroke="none" opacity={0.25 + i * 0.28} />
            </g>
          ))}

          {/* time series readings */}
          <text x="24" y="212" fontSize="8.5" letterSpacing="0.14em" fill="var(--muted-foreground)" stroke="none">
            PPM STREAM — 16 SAMPLES
          </text>
          <path d="M 24 320 L 536 320" stroke="var(--border)" />
          <path d="M 24 224 L 24 320" stroke="var(--border)" />
          <path
            d={readings
              .map((v, i) => `${i === 0 ? "M" : "L"} ${24 + i * 34} ${320 - v}`)
              .join(" ")}
            stroke="var(--accent)"
            strokeWidth="1.4"
          />
          {readings.map((v, i) => (
            <circle key={i} cx={24 + i * 34} cy={320 - v} r="1.8" fill="var(--accent)" stroke="none" opacity="0.8" />
          ))}
          <path d="M 24 250 L 536 250" stroke="var(--border-strong)" strokeDasharray="4 4" />
          <text x="470" y="245" fontSize="8" letterSpacing="0.12em" fill="var(--muted-foreground)" stroke="none">
            THRESHOLD
          </text>
        </g>
      </svg>
      <figcaption className="label-eyebrow mt-4">Fig. 02 — AERIS sense · transmit · classify</figcaption>
    </figure>
  );
}
