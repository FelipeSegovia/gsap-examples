import gsap from 'gsap'

const ScrollTriggerStartEnd = () => {
  gsap.to('.c', {
    x: 400,
    rotation: 360,
    duration: 3,
    repeat: -1,
  })

  return (
    <>
      <div className="box a">a</div>
      <div className="box b">b</div>
      <div className="box c">c</div>
      <div className="box a">d</div>
      <div className="box b">e</div>
    </>
  )
}

export default ScrollTriggerStartEnd
