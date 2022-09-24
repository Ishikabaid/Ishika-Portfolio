
const Frontend = () => {
  return (
    <div className="skills-content frontend">
      <h3 className="skills-title">Frontend</h3>

      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <i class="uil uil-html5 bx bx-badge-check"></i>
            <div><h3 className="skills-name">HTML</h3></div>
          </div>

          <div className="skills-data">
            <i class="uil uil-css3-simple bx bx-badge-check"></i>
            <div><h3 className="skills-name">CSS</h3></div>
          </div>

          <div className="skills-data">
            <i class='bx bxl-javascript'></i>
            <div><h3 className="skills-name">JavaScript</h3></div>
          </div>

          <div className="skills-data">
            <i class="uil uil-react bx bx-badge-check"></i>
            <div><h3 className="skills-name">React.js</h3></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frontend;