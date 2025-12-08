import TopLogo from "./components/TopLogo";
import Hero from "./components/Hero";
import SocialLinks from "./components/SocialLinks";
import Particles from "./components/particles";

export default function App() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Particles
          particleColors={["#40CFC3", "#40CFC3"]}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          particleHoverFactor={0.5}
          disableRotation={false}
        />
      </div>
      <main
        role="main"
        style={{ position: "relative", zIndex: 1, pointerEvents: "none" }}
      >
        <div style={{ pointerEvents: "auto" }}>
          <TopLogo />
        </div>
        <div style={{ pointerEvents: "auto" }}>
          <Hero />
        </div>
        <div style={{ pointerEvents: "auto" }}>
          <SocialLinks />
        </div>
      </main>
    </>
  );
}
