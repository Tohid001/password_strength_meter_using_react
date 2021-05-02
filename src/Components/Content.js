/* eslint-disable no-unused-expressions */
import themeContext from '../contexts/themeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

export default function Content() {
    // const context = useContext(ThemeContext);
    // const { theme, switchTheme } = context;

    console.log('Content rendered');
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(count, incrementCount) => (
                    <themeContext.Consumer>
                        {({ theme, switchTheme }) => (
                            // eslint-disable-next-line no-unused-expressions
                            <HoverCounter
                                count={count}
                                incrementCount={incrementCount}
                                theme={theme}
                                switchTheme={switchTheme}
                            />
                        )}
                    </themeContext.Consumer>
                )}
            </Counter>
        </div>
    );
}
