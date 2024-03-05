const Description = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-21xl);
  font-weight: 500;
  font-family: inherit;
  text-align: center;
  white-space: nowrap;
  @media screen and (max-width: 900px) {
    font-size: var(--font-size-13xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-5xl);
  }
`;
const GroupIcon = styled.img`
  height: 1.5rem;
  width: 1.544rem;
  position: relative;
  object-fit: cover;
`;
const Input = styled.div`
  height: 1.625rem;
  width: 4.694rem;
  position: relative;
  line-height: 1.625rem;
  display: inline-block;
  flex-shrink: 0;
`;
const InputUser = styled.div`
  width: 18rem;
  border-bottom: 1px solid var(--color-gray-700);
  box-sizing: border-box;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-base);
  gap: 0rem 1.375rem;
`;
const Input1 = styled.div`
  height: 1.625rem;
  width: 4.563rem;
  position: relative;
  line-height: 1.625rem;
  display: inline-block;
  flex-shrink: 0;
`;
const GroupIcon1 = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  position: relative;
  object-fit: cover;
`;
const Input2 = styled.div`
  position: relative;
  mix-blend-mode: normal;
`;
const Input3 = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  line-height: 1.625rem;
  color: var(--color-black);
  white-space: nowrap;
`;
const InputField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.313rem 0rem;
`;
const FrameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0rem 1.313rem;
`;
const EmailInput = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--color-gray-800);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-mini);
  font-size: var(--font-size-xs);
  color: var(--color-gray-300);
`;
const InputsRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 3.313rem 0rem;
  min-height: 25.438rem;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-black);
  font-family: var(--font-roboto);
  @media screen and (max-width: 450px) {
    gap: 3.313rem 0rem;
  }
`;

const Inputs = memo(() => {
  return (
    <InputsRoot>
      <Description>Sign up</Description>
      <InputUser>
        <GroupIcon alt="" />
        <Input>Email</Input>
      </InputUser>
      <InputUser>
        <GroupIcon alt="" />
        <Input1>Password</Input1>
      </InputUser>
      <EmailInput>
        <FrameContainer>
          <GroupIcon1 loading="lazy" alt="" />
          <InputField>
            <Input2>Email</Input2>
            <Input3>johnsmith@gmail.com</Input3>
          </InputField>
        </FrameContainer>
      </EmailInput>
    </InputsRoot>
  );
});

export default Inputs;
