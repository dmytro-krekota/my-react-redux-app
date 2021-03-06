import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../home/Home'
import Example1 from '../examples/1/Example1'
import Example2 from '../examples/2/Example2'
import Example3 from '../examples/3/Example3'

const Main = () => (
    <main>
        <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-12">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/example-1" component={Example1} />
                        <Route exact path="/example-2" component={Example2} />
                        <Route exact path="/example-3" component={Example3} />
                    </Switch>
                </div>
            </div>
        </div>
    </main>
)

export default Main