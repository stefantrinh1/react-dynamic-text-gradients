import './App.css';
import TextGradient from './lib/components/TextGradient';
function App() {
  return (
    <div className='textGradient'>
      <TextGradient
        as='h2'
        text={'Sample Text Here'}
        colors={[
          'rgb(100, 37, 160)',
          'rgb(137, 59, 172)',
          'red',
          'orange',
          'blue',
        ]}
        // style={{ fontSize: '5rem' }}
        className={'myTestClass'}
        gradientAngle={120}
      />
    </div>
  );
}

export default App;
