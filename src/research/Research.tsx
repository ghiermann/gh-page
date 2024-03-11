import {Button, Card, CardActions, CardContent, Grid} from '@mui/material';
import React from "react";
import Typography from "@mui/material/Typography";
import { useNavigate } from 'react-router-dom';

import bib from "./data/bib.json"

const CustomCard = ({title, authors, journal, year, links} : {
    title: string,
    authors: string,
    journal: string,
    year: number,
    links: { outlet: string, href: string }[]
}) => (
    <Card sx={{ minWidth: 275 }} raised={true} key={`${title}-card`}>
        <CardContent>
            <Typography variant="h6" component="div">
                {title}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {authors}
            </Typography>
            <Typography variant="body2">
                {journal}, {year}
            </Typography>
        </CardContent>
        <CardActions>
            {links.map((link) => (
                <Button key={`${link.outlet}-card-button`} size="small" href={link.href} target="_blank" rel="noopener">{link.outlet}</Button>
            ))}
        </CardActions>
    </Card>
);


export default function Research() {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    }

    return (
        <>
        <Grid container spacing={2}>
            <Grid key={`header-card-item`} item xs={12}>
                <Button variant="outlined" href={'https://www.researchgate.net/profile/Gerhard_Hiermann'} target="_blank" rel="noopener">ResearchGate</Button>
                <Button variant="outlined" href={'https://scholar.google.com/citations?user=pNqvMTkAAAAJ&hl=en'} target="_blank" rel="noopener">Google Scholar</Button>
                <Button  variant="outlined" onClick={() => {navigateHome()}}>back</Button>
            </Grid>
            {bib.map((entry) => (
                <Grid key={`${entry.title}-card-item`} item xs={12}>
                    <CustomCard title={entry.title} authors={entry.authors} journal={entry.journal} year={entry.year} links={entry.links} />
                </Grid>
            ))}
        </Grid>
        </>
    )
}
