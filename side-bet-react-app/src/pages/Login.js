import { EuiPage, EuiPageBody, EuiPageSection, EuiFormRow, EuiFieldText } from "@elastic/eui"

export const LoginPage = () => {
    return (
        <EuiPage paddingSize="none">
            <EuiPageBody paddingSize="none">
                <EuiPageSection>Login</EuiPageSection>
                <EuiFormRow
                    label="Text field"
                    helpText="I am some friendly help text."
                >
                    <EuiFieldText />
                </EuiFormRow>
            </EuiPageBody>
        </EuiPage>
    )
}