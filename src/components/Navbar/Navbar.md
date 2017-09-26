Basic navigation bar for the home page:

```js
<div style={{ background: '#9BCA3B' }}>
    <Navbar 
        transparent 
        renderLogo={() =>
            <a className="navbar-item" href="#">
                <img src="/tandemly-full-logo-black-white.svg" alt="Tandem.ly Logo" width="112" height="28" /> 
            </a>
        }
        renderLeftMenu={() => [
            <a href="#" className="navbar-item">One</a>,
            <a href="#" className="navbar-item">Two</a>,
            <a href="#" className="navbar-item is-active">Three</a>,
        ]}
    />
</div>
```