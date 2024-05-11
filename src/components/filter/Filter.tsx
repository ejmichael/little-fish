import React, { ChangeEvent } from "react";
import { Box, FormControl, Input, InputLabel, MenuItem, Select, Slider, Typography } from "@mui/material";
import { SelectChangeEvent } from '@mui/material/Select';
import { TextChange } from "typescript";

interface FilterProps {
    category: string;
    setCategory: (category: string) => void;
    maxPrice: number;
    setMaxPrice: (category: number) => void;
}

const Filter: React.FC<FilterProps> = ({ category, setCategory, maxPrice, setMaxPrice }) => {

    const handleChange = (event: SelectChangeEvent<string>) => {
        setCategory(event.target.value.toLocaleLowerCase());
    };
    
    const handleMaxPriceChange = (event: any, newValue: number | number[]) => {
        setMaxPrice(newValue as number);
    };


    function valuetext(value: number) {
        return `R ${value}`;
      }

    return (
        <Box sx={{ display: 'flex', gap: 4, justifyContent: 'flex-start', flexDirection: 'column', borderRight: '1px solid #cccc', height: '100%', p:2}}>
            <Box mb={2}>
                <Typography variant="h6">Filter</Typography>
            </Box>
            <Box>
                <FormControl fullWidth>
                    <InputLabel id="category-select-label">Category</InputLabel>
                    <Select
                        labelId="category-select-label"
                        id="category-select"
                        value={category}
                        label="Category"
                        onChange={handleChange}
                    >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value="Gaming">Gaming</MenuItem>
                        <MenuItem value="Photography">Photography</MenuItem>
                        <MenuItem value="Drones">Drones</MenuItem>
                        <MenuItem value="Earbuds">Earbuds</MenuItem>
                        <MenuItem value="Headphones">Headphones</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box>
                <InputLabel id="category-select-label">Max Price: R {maxPrice}</InputLabel>
                <Slider
                    aria-label="Price"
                    defaultValue={900}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    shiftStep={30}
                    step={100}
                    marks
                    min={100}
                    max={1000}
                    onChange={handleMaxPriceChange}
                    sx={{ color: '#967ADC'}}
                />
            </Box>
        </Box>
    );
};

export default Filter;
