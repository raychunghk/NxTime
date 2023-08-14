import { useForm } from '@mantine/form';
import { basepath, basepath2 } from '/global';
import { TextInput, Checkbox, Code, Text, Stack, Input, Modal, Button, Grid, Center, Card, CardSection } from '@mantine/core';
import Layout from '../../components/layout';
import Head from 'next/head';
import { useState } from 'react';
import UserStyle from '../../styles/User.module.css'
import axios from 'axios';
import { useForm as uForm } from 'react-hook-form';
require('dotenv').config();
//import { basePath } from '/src/shared/constants/env'
export default function User() {

    const userModel = {
        StaffName: '',
        AgentName: '',
        StaffCategory: '',
        Department: '',
        PostUnit: '',
        ManagerName: '',
        ManagerTitle: '',
        ManagerEmail: '',
    }
    const [formValues, setFormValues] = useState(userModel);
    const [modalOpen, setModalOpen] = useState(false);
    const { register, handleSubmit, reset } = uForm();
    const [submitting, setSubmitting] = useState(false);
    const form = useForm({
        initialValues: {

            user: {
                userModel
            },
        },
    });
    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleInputChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        });
    };
    const onSubmit = async (event) => {
        // event.preventDefault();

        console.log(basepath2)
        console.log(basepath)
        const port = process.env.PORT;
        console.log(port)
        setSubmitting(true);
        //path = `${basePath}/api/user`;
        const response = await axios.post(`${basepath}/api/user`, formValues);
        //console.log(response.data);
        setSubmitting(false);
        if ([200, 201].includes(response.status)) {
            setModalOpen(true);
            reset();
            setFormValues(userModel);
        } else {
            console.error('Failed to create staff record:', response);
        }

    };


    return (
        <Layout home>
            <Head>
                <title>User Information</title>
            </Head>

            <form method="post" onSubmit={handleSubmit(onSubmit)}>
                {basepath}{basepath2}
                <Card shadow="sm" padding="lg" radius="md" maw={500} withBorder sx={(theme) => ({
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                    padding: theme.spacing.xl,
                    borderRadius: theme.radius.md,
                    backgroundColor: theme.colors.gray[1],
                    '&:hover': {
                        backgroundColor:
                            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
                    },
                })}>
                    <Card.Section className={UserStyle.mySection}>

                        <Center>
                            <h2>User Information</h2>
                        </Center>

                    </Card.Section>

                    <Grid pb={30}>

                        <Grid.Col span={6}>
                            {/* <TextInput
                                label="Staff name"
                                placeholder="Staff name"
                                name="StaffName"
                                mt="md"
                                value={formValues.StaffName}
                                onChange={handleInputChange}
                            /> */}
                            <TextInput placeholder="Staff name"
                                mt="sm" label="Staff Name" {...register('StaffName', { required: true })}
                                onChange={handleInputChange} />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <TextInput
                                label="Agent name"
                                placeholder="Agentname"
                                name="AgentName"
                                mt="sm"
                                value={formValues.AgentName}
                                onChange={handleInputChange}
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <TextInput
                                label="Staff category"
                                placeholder="Staff category"
                                name="StaffCategory"
                                mt="sm"
                                value={formValues.StaffCategory}
                                onChange={handleInputChange}
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <TextInput
                                label="Department"
                                placeholder="Department"
                                name="Department"
                                mt="sm"
                                value={formValues.Department}
                                onChange={handleInputChange}
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <TextInput
                                label="Post unit"
                                placeholder="Post unit"
                                name="PostUnit"
                                mt="sm"
                                value={formValues.PostUnit}
                                onChange={handleInputChange}
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <TextInput
                                label="Manager name"
                                placeholder="Manager name"
                                name="ManagerName"
                                mt="sm"
                                value={formValues.ManagerName}
                                onChange={handleInputChange}
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <TextInput
                                label="Manager title"
                                placeholder="Manager title"
                                name="ManagerTitle"
                                mt="sm"
                                value={formValues.ManagerTitle}
                                onChange={handleInputChange}
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <TextInput
                                label="Manager email"
                                placeholder="Manager email"
                                name="ManagerEmail"
                                mt="sm"
                                value={formValues.ManagerEmail}
                                onChange={handleInputChange}
                            />
                        </Grid.Col>

                    </Grid>


                    <Card.Section bg="indigo.2" py="md" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>


                        <Button type="submit" fullWidth loading={submitting}

                            maw={250} radius="md">
                            Submit
                        </Button>

                    </Card.Section>




                </Card>
            </form>
            <Text size="sm" weight={500} mt="xl">
                Form values:
            </Text>
            <Code block mt={3}>
                {JSON.stringify(formValues, null, 2)}
            </Code>

            <Modal.Root opened={modalOpen} onClose={handleModalClose} >
                <Modal.Overlay />
                <Modal.Content>
                    <Modal.Header bg="indigo.4" c='white'  >
                        <Modal.Title ><Text fw={700} fz="md">Success</Text></Modal.Title>
                        <Modal.CloseButton bg="indigo.2" />
                    </Modal.Header>
                    <Modal.Body>
                        <Text mt="md">Staff record created successfully!</Text>
                        <Center >
                            <Button mt="md" onClick={handleModalClose}>Ok</Button>
                        </Center>
                    </Modal.Body>
                </Modal.Content>
            </Modal.Root>
            { /*</Box>*/}
        </Layout >
    );
}