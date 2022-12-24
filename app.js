const heading1 = React.createElement('h1', {key: 1}, 'HEADING1 FROM REACT');
const heading2 = React.createElement('h1', {key: 2}, 'HEADING2 FROM REACT');
const container = React.createElement('div', {className: 'container'}, [heading1, heading2]);
const root  = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);