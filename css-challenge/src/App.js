import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="inner-container-top">
          <div className="Content">
            <div className="page-heading">
              <div className="content-container">
                <h1 className="top-heading-text"> Hi, Eamonn! </h1>
                <p className="top-subheading-text">23 Jan, 2021</p>
              </div>
              <i name="bell icon" className="fa fa-bell bellicon"></i>
            </div>
          </div>

          <div className="searchContainer">
            <i name="search icon" className="fa fa-search searchIcon"></i>
            <input
              className="searchBox"
              type="search"
              name="search"
              placeholder="Search"
            />
          </div>

          <div className="w3-cell-row">
            <div className="w3-cell w3-container">
              <div className="subheadings">
                <p className="dots">
                  <span style={{ backgroundColor: 'white' }}></span>
                  <span style={{ backgroundColor: 'white' }}></span>
                </p>
                <h2 className="subheading-text" style={{ color: 'white' }}>
                  How do you feel?
                </h2>
              </div>
              <div className="btn-group" style={{ width: '100%' }}>
                <button name="Badly Emoji" style={{ width: '20%' }}>&#x1F614;</button>
                <button name="Okay Emoji" style={{ width: '20%' }}>&#x1F642;</button>
                <button name="Good Emoji" style={{ width: '20%' }}>&#x1F60A;</button>
                <button name="Great Emoji" style={{ width: '20%' }}>&#x1F603;</button>

                <div className="emoji-text"><p>Badly</p></div>
                <div className="emoji-text"><p>Okay</p></div>
                <div className="emoji-text"><p>Good</p></div>
                <div className="emoji-text"><p>Great</p></div>
              </div>
            </div>
          </div>
        </div>

        <div className="inner-container-bottom">
          <hr className="Mobilesliderline" />

          <div className="subheadings">
            <p className="dots">
              <span style={{ backgroundColor: 'black' }}></span>
              <span style={{ backgroundColor: 'black' }}></span>
            </p>
            <h2 className="subheading-text"> Exercises </h2>
          </div>

          <div className="card">
            <i name="speaking skills icon"
              style={{ backgroundColor: '#E98A5F' }}
              className="fa fa-heart post-image"
            ></i>
            <div className="content-container">
              <p className="dots">
                <span></span>
                <span></span>
              </p>
              <h3 className="card-heading"> Speaking Skills </h3>
              <p className="card-subheading">16 Exercises</p>
            </div>
          </div>

          <div className="card">
            <i name="reading speed icon"
              style={{ backgroundColor: '#3F8DC5' }}
              className="fa fa-users post-image"
            ></i>
            <div className="content-container">
              <p className="dots">
                <span></span>
                <span></span>
              </p>
              <h3 className="card-heading"> Reading Speed </h3>
              <p className="card-subheading">8 Exercises</p>
            </div>
          </div>

          <div className="card">
            <i name="reaction time icon"
              style={{ backgroundColor: '#E7667F' }}
              className="fa fa-eye post-image"
            ></i>
            <div className="content-container">
              <p className="dots">
                <span></span>
                <span></span>
              </p>
              <h3 className="card-heading"> Reaction Time </h3>
              <p className="card-subheading">12 Exercises</p>
            </div>
          </div>
        </div>
        <div className="footer">

            <div className="bottom-nav" style={{ width: '100%' }}>
              <button
              name="home icon"  className="fa fa-home active"
                style={{ width: '20%' }}
              ></button>
              <button
              name="grid icon"  className="fa fa-th-large"
                style={{ width: '20%' }}
              ></button>
              <button
               name="envelope icon"  className="fa fa-envelope"
                style={{ width: '20%' }}
              ></button>
              <button name="user icon" className="fa fa-user" style={{ width: '20%' }}></button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
