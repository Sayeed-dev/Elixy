const Hero = () => {
  return (
    <div
      className="hero justify-start min-h-screen px-15"
      style={{
        backgroundImage: `url(/hero-bg.jpg)`,
      }}
    >
      <div className="text-gray-900 ">
        <div className="max-w-xl">
          <h1 className="mb-5 text-6xl font-bold">
            Connect Freely. <br />Share Boldly. <br />Be You.
          </h1>
          <p className="mb-5">
            Join a space where your voice matters. Discover people who think
            like you, create content that inspires, and build real connections
            without limits.
          </p>
          <button className="btn btn-xl bg-gray-900 text-amber-50">Add Friend</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
