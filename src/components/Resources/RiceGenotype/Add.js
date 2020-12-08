import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import RiceGenotypeServices from '../../../services/riceGenotype';
import Container from '@material-ui/core/Container';


const genotypeService = new RiceGenotypeServices();



export default function Add({getGenotypes,openDrawer}){


    const [form, setForm] = React.useState({
        name:'',
        rice_genotype_id:'',
        resistance_genes:'',
        r_gene_sources: '',
        susceptible_background:'',
        accession_number:'',
        pedigree:'',
        category:'',

        errorMsg: '',
        errors: false,
        load: false,
    });



    const handleChange = (event) => {
        const value = event.target.value;
        setForm({...form, [event.target.name]:value });
    };


    const handleSubmit = () => {


        genotypeService.addRiceGenotypes(form).then(
            response => {
                console.log(response.data);
                getGenotypes();
                openDrawer();
            }
        ).catch(
            error => {
                console.log(error.response.data.message);
                setForm({...form, errorMsg:error.response.data.message});
            }
        );
    }
    

    return(
        <Container fixed className='form-container'>

            <Form 
                form={form} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                openDrawer={openDrawer}
            >

            </Form>
        </Container>
    )

}