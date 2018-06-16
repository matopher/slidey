import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoList: [
        {
          link: 'http://via.placeholder.com/650x350/9f0733/ffffff',
          headline: 'Umami banjo ramps',
          paragraph:
            'Listicle knausgaard lumbersexual, XOXO taxidermy venmo pinterest. '
        },
        {
          link: 'http://via.placeholder.com/650x350/161515/ffffff',
          headline: 'Shaman banjo aesthetic',
          paragraph:
            'Live-edge glossier pabst, drinking vinegar forage 3 wolf moon asymmetrical. '
        },
        {
          link: 'http://via.placeholder.com/650x350/1aaa15/ffffff',
          headline: 'Master cleanse freegan 90s vice',
          paragraph:
            'Master cleanse freegan 90s vice, stumptown try-hard neutra. '
        },
        {
          link: 'http://via.placeholder.com/650x350/0793CA/ffffff',
          headline: 'Cardigan blue bottle',
          paragraph:
            'Cardigan blue bottle pop-up pabst unicorn. Deep v food truck edison bulb vice kitsch normcore brunch flexitarian shaman poke.'
        }
      ],
      currentImageIndex: 0,
      isHovering: false
    };
  }

  toggleHoverState = () => {
    const { isHovering } = this.state;
    return {
      isHovering: !isHovering
    };
  };

  // Toggle overlay text on click or hover
  handleMouseHoverOrClickk = () => {
    this.setState(this.toggleHoverState);
  };

  nextImage = () => {
    const { currentImageIndex, photoList } = this.state;
    // if curr index = index.length reset to 0
    if (currentImageIndex === photoList.length - 1) {
      this.setState({
        currentImageIndex: 0
      });
    }
    // else increment
    else {
      this.setState({
        currentImageIndex: this.state.currentImageIndex + 1
      });
    }
  };

  prevImage = () => {
    const { currentImageIndex, photoList } = this.state;
    // if curr index = 0 reset to array length
    if (currentImageIndex === 0) {
      this.setState({
        currentImageIndex: photoList.length - 1
      });
    }
    // else decrease count by 1
    else {
      this.setState({
        currentImageIndex: this.state.currentImageIndex - 1
      });
    }
  };

  render() {
    const { currentImageIndex, photoList } = this.state;
    console.log(this.state.photoList);
    return (
      <div className="App">
        <h2>
          🖼️ {currentImageIndex + 1} of {photoList.length}
        </h2>
        <section>
          <button onClick={this.prevImage} type="button" class="btn btn-light">
            ⬅️
          </button>
          <div
            class="slide-container"
            onMouseEnter={this.handleMouseHoverOrClick}
            onMouseLeave={this.handleMouseHoverOrClick}
            onClick={this.handleMouseHoverOrClick}
          >
            <img src={photoList[currentImageIndex].link} class="img-fluid" />
            {this.state.isHovering && (
              <div class="overlay">
                <h1>{photoList[currentImageIndex].headline}</h1>
                <p class="lead">{photoList[currentImageIndex].paragraph}</p>
                <p class="lead">
                  <a
                    class="btn btn-primary btn-lg"
                    href={photoList[currentImageIndex].link}
                    role="button"
                  >
                    View image 🔎
                  </a>
                </p>
              </div>
            )}
          </div>

          <button onClick={this.nextImage} type="button" class="btn btn-light">
            ➡️
          </button>
        </section>
      </div>
    );
  }
}

export default App;
