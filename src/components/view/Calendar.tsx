import React, { Component } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";

// import './Sample.less';

interface State {
    value: Date | Date[];
}

// styleComponents書き終わったら別ファイルに保管でもいいかも
const Header = styled.header`
    background-color: #323639;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    padding: 20px;
    color: white;
`;

const HeaderH1 = styled.h1`
    font-size: inherit;
    margin: 0;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 10px 0;
    padding: 10px;
`;

const ContainerContent = styled.main`
    display: flex;
    max-width: 100%;
    flex-basis: 420px;
    flex-direction: column;
    flex-grow: 100;
    align-items: stretch;
    padding-top: 1em;
    & button {
        margin: 5px;
    }
`;

export default class Sample extends Component<{}, State> {
    state = {
        value: new Date(),
    };

    onChange = (value: Date | Date[]) => {
        this.setState({ value });
        console.log(value);
    };

    render() {
        const { value } = this.state;

        return (
            <div className="Sample">
                <Header>
                    <HeaderH1>react-calendar sample page</HeaderH1>
                </Header>
                <Container className="Sample__container">
                    <ContainerContent className="Sample__container__content">
                        <Calendar
                            onChange={this.onChange}
                            // showWeekNumbers
                            value={value}
                        />
                    </ContainerContent>
                </Container>
            </div>
        );
    }
}
