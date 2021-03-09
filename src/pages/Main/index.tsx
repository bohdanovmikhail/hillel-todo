import { Switch, Redirect, Route } from 'react-router-dom';
export function MainPage() {
    return (
        <div>
            Main page
            <Switch>
                <Route path="/page1"><div>Page 1</div></Route>
                <Route path="/page2"><div>Page 2</div></Route>
                <Redirect path="/" exact to="/page1" />
            </Switch>
        </div>
    );
}
