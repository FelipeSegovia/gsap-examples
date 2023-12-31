const RouteComponent = () => {
  return (
    <>
      <div id="sidebar">
        <nav>
          <h1>Listado de ejemplos </h1>
          <ul>
            <li>
              <h2>Core</h2>
              <ul>
                <li>
                  <a href={`/core/rotation-cube`}>Rotation Cube</a>
                </li>
              </ul>
            </li>
            <li>
              <a href={`/core/move-cube`}>Move Cube</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  )
}

export default RouteComponent
