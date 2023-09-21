"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  MenuItem,
  Step,
  StepLabel,
  Stepper,
  Select,
  Typography,
  InputLabel,
} from "@mui/material";
import { Field, Form, Formik, FormikConfig, FormikValues } from "formik";
import { CheckboxWithLabel, TextField } from "formik-mui";
import React, { useState } from "react";
import { boolean, mixed, number, object } from "yup";

const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time));

export default function Home() {
  const [showOtherInput, setShowOtherInput] = useState<Boolean>(false);
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={8} md={6}>
        <Card>
          <CardContent>
            <FormikStepper
              initialValues={{
                firstName: "",
                lastName: "",
                millionaire: false,
                money: "",
                description: "",
              }}
              onSubmit={async (values) => {
                await sleep(3000);
                console.log("values", values);
              }}
            >
              <FormikStep label="Personal Details">
                <Box paddingBottom={2} marginTop={4}>
                  <Field
                    fullWidth
                    name="firstName"
                    component={TextField}
                    label="Name (Full Name) as in Aadhar Card"
                  />
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    fullWidth
                    name="lastName"
                    component={TextField}
                    label="Email ID"
                    type="email"
                  />
                </Box>
              </FormikStep>

              <FormikStep label="Property Details">
                <Box paddingBottom={2}>
                  <Field
                    fullWidth
                    name="money"
                    component={TextField}
                    label="Owner Name (Myself/Other)"
                  />
                </Box>

                <Box paddingBottom={2}>
                  <Field
                    fullWidth
                    name="other"
                    component={CheckboxWithLabel}
                    Label={{ label: "Other" }}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setShowOtherInput(e.target.checked)
                    }
                  />
                </Box>
                {showOtherInput && (
                  <Box paddingBottom={2}>
                    <Field
                      fullWidth
                      name="otherOwnerDetails"
                      component={TextField}
                      label="Owner Name and Contact No"
                    />
                  </Box>
                )}
                <Box paddingBottom={2}>
                  <Field
                    fullWidth
                    name="money"
                    component={TextField}
                    label="Current Location (Property)"
                  />
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    fullWidth
                    name="money"
                    component={TextField}
                    label="Address"
                  />
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    fullWidth
                    name="money"
                    component={TextField}
                    label="Size & Dimensions"
                  />
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    fullWidth
                    name="money"
                    type="number"
                    component={TextField}
                    label="No. of Rooms"
                  />
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    fullWidth
                    name="propertyType"
                    component={Select}
                    label="Property Type"
                    sx={{ color: "black" }}
                    inputProps={{ style: { width: "100%" } }}
                  >
                    <MenuItem value="builder floor">Builder Floor</MenuItem>
                    <MenuItem value="apartment">Apartment</MenuItem>
                    <MenuItem value="house">House</MenuItem>
                    <MenuItem value="villa">Villa</MenuItem>
                  </Field>
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    fullWidth
                    name="RoomType"
                    component={Select}
                    label="Room Type"
                    sx={{ color: "black" }}
                    inputProps={{ style: { width: "100%" } }}
                  >
                    <MenuItem value="builder floor">1 RK </MenuItem>
                    <MenuItem value="apartment">1 BHK</MenuItem>
                    <MenuItem value="house">2 BHK</MenuItem>
                    <MenuItem value="villa">3 BHK</MenuItem>
                    <MenuItem value="villa">Shared / Private</MenuItem>
                  </Field>
                </Box>
                <Box paddingBottom={2}>
                  <Button variant="contained" component="label">
                    Upload Photographs
                    <input type="file" hidden />
                  </Button>
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    fullWidth
                    name="money"
                    component={TextField}
                    label="Amenities"
                  />
                </Box>
                <Box paddingBottom={2}>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    onChange={() => {}}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="builder floor">Owner </MenuItem>
                    <MenuItem value="apartment">Broker</MenuItem>
                    <MenuItem value="house">ACOMO</MenuItem>
                  </Select>
                </Box>
                <Box paddingBottom={2}>
                  <Box display="flex" flexDirection="row" alignItems="center">
                    <Box paddingRight={2}>
                      <Typography variant="h6" gutterBottom>
                        Schedule Verification
                      </Typography>
                    </Box>
                    <Box>
                      <Field
                        fullWidth
                        name="verificationDate"
                        component={TextField}
                        type="date"
                      />
                    </Box>
                    <Box marginLeft={2}>
                      <Field
                        fullWidth
                        name="verificationTime"
                        component={TextField}
                        type="time"
                      />
                    </Box>
                  </Box>
                </Box>
              </FormikStep>
              <FormikStep label="Verification Process">
                <Box paddingBottom={2}>
                  <Field
                    fullWidth
                    name="description"
                    component={TextField}
                    label="Complete KYC- Owner (Aadhar, Pan)"
                  />
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    fullWidth
                    name="description"
                    component={TextField}
                    label="Complete KYC - Property (Doc1, Doc2, etc)"
                  />
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    fullWidth
                    name="description"
                    component={TextField}
                    label="Add Room Type Details (Photos, Tenant Gender, Private, Shared, Amenities)"
                  />
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    fullWidth
                    name="description"
                    component={TextField}
                    label="Package Subscription Plan - Property Managed By (Owner/Broker, Semi ACOMO, ACOMO)"
                  />
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    fullWidth
                    name="description"
                    component={TextField}
                    label="Agreement/Contract"
                  />
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    fullWidth
                    name="description"
                    component={TextField}
                    label="Listing Goes Live in 24 hrs of Successful verification"
                  />
                </Box>
              </FormikStep>
            </FormikStepper>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {
  label: string;
}

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
}

export function FormikStepper({
  children,
  ...props
}: FormikConfig<FormikValues>) {
  // @ts-ignore
  const childrenArray = React.Children.toArray(
    children
  ) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);

          // the next line was not covered in the youtube video
          //
          // If you have multiple fields on the same step
          // we will see they show the validation error all at the same time after the first step!
          //
          // If you want to keep that behaviour, then, comment the next line :)
          // If you want the second/third/fourth/etc steps with the same behaviour
          //    as the first step regarding validation errors, then the next line is for you! =)
          //
          // In the example of the video, it doesn't make any difference, because we only
          //    have one field with validation in the second step :)
          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step
                key={child.props.label}
                completed={step > index || completed}
              >
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {currentChild}

          <Grid container spacing={2}>
            {step > 0 ? (
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  variant="outlined"
                  color="primary"
                  onClick={() => setStep((s) => s - 1)}
                >
                  Back
                </Button>
              </Grid>
            ) : null}
            <Grid item>
              <Button
                startIcon={
                  isSubmitting ? <CircularProgress size="1rem" /> : null
                }
                disabled={isSubmitting}
                variant="outlined"
                color="primary"
                type="submit"
              >
                {isSubmitting ? "Submitting" : isLastStep() ? "Submit" : "Next"}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
