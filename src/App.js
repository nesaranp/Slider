import './App.css';

const data = {
  type: "GYR",
  thresholds: [0, 10, 100, 1000],
  value: 81
  };

function App() {
  const sliderArray= [...data.type];

  const getOpacity = index => {
    if (data.thresholds[index] < data.value && data.thresholds[index+1] > data.value) return "1";
    return "50%";
  }

  const getColour = color => {
    if (color === 'R') return "red";
    else if (color === 'G') return "green";
    return "yellow";
  };

  const getLeft = () => {
    for (let index = 0; index < data.thresholds.length; index++) {
      if (data.thresholds[index] < data.value && data.thresholds[index+1] > data.value)
      return`${((1000/data.type.length)*index) + ((1000/data.type.length)* (data.value-data.thresholds[index])/(data.thresholds[index+1]-data.thresholds[index]))}px`;
    }
  };

  return (
    <div className="App">
      <div className="sliderContainer">
        <div className="pointer" style = {{left: getLeft()}}>T</div>
        <div className="slider">
          {
            sliderArray.map((item, index) => {
              const style = {
                width: (1000/data.type.length),
                height: "6px",
                borderRadius: "50px",
                backgroundColor: getColour(item),
                opacity: getOpacity(index)
              }
              return (
              <div>
                <div style={style}/>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                  {index === data.type.length-1 ? (
                  <>
                    <span>{data.thresholds[index]}</span>
                    <span>{data.thresholds[index+1]}</span>
                  </>
                ): (<span>{data.thresholds[index]}</span>)}
                </div>
              </div>)
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
