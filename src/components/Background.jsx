import '../styles/bg.css'

export default function Background() {
  return (
    <div className="bg" aria-hidden="true">

      {/* Gradient mesh orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      {/* Glitch lines — horizontal */}
      <div className="gh gh1 col-a" />
      <div className="gh gh2 col-b thick" />
      <div className="gh gh3 col-c" />
      <div className="gh gh4 col-a" />
      <div className="gh gh5 col-b" />
      <div className="gh gh6 col-c thick" />
      <div className="gh gh7 col-a" />
      <div className="gh gh8 col-b" />

      {/* Glitch lines — vertical */}
      <div className="gv gv1 col-b" />
      <div className="gv gv2 col-a thick-v" />
      <div className="gv gv3 col-c" />
      <div className="gv gv4 col-b" />
      <div className="gv gv5 col-a" />
      <div className="gv gv6 col-c thick-v" />

      {/* Glitch lines — diagonal (wrapper = position, inner = rotation + animation) */}
      <div className="gd-wrap gd-wrap-1"><div className="gd gd1 col-a" /></div>
      <div className="gd-wrap gd-wrap-2"><div className="gd gd2 col-b" /></div>
      <div className="gd-wrap gd-wrap-3"><div className="gd gd3 col-c thick" /></div>
      <div className="gd-wrap gd-wrap-4"><div className="gd gd4 col-a" /></div>

      {/* Paper grain */}
      <div className="grain" />

    </div>
  )
}