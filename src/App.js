/* eslint-disable react/no-unused-state */
import React from 'react';
import ClickCounter from './Components/ClickCounter';
import Counter from './Components/Counter';
import Section from './Components/Section';
import ThemeContext from './contexts/themeContext';

export default class App extends React.Component {
    state = {
        // eslint-disable-next-line react/no-unused-state
        theme: 'light',
        switchTheme: () => {
            this.setState(({ theme }) => {
                if (theme === 'dark') {
                    return {
                        theme: 'light',
                    };
                }
                return {
                    theme: 'dark',
                };
            });
        },

        // eslint-disable-next-line react/no-unused-state
    };

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                <>
                    <div className="app">
                        <Counter>
                            {(counter, incrementCount) => (
                                <ClickCounter count={counter} incrementCount={incrementCount} />
                            )}
                        </Counter>

                        <Section />
                    </div>
                </>
            </ThemeContext.Provider>
        );
    }
}
