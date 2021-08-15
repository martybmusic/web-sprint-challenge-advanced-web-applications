import React from 'react';

import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from './BubblePage';
import fetchColorService from '../services/fetchColorService'

jest.mock('../services/fetchColorService');

const testColor = {
    color: "softpink",
    code: {
      hex: "#dd99ba",
    },
    id: 1,
}

test("Renders without errors", ()=> {
    render(<BubblePage />);
});


test("Renders appropriate number of colors passed in through mock", ()=> {
    //Keep in mind that our service is called on mount for this component.
    fetchColorService.mockResolvedValueOnce(testColor);
    render(<BubblePage />);
    const colors = screen.getAllByTestId('color');
    await waitFor(() => {expect(colors).toHaveLength(1)})

});