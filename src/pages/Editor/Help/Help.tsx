import { Button } from "@/shared/components/Button/Button";
import { Icon } from "@/shared/components/Icon/Icon";
import { Modal } from "@/shared/components/Modal/Modal";
import { ModalFooterContainer, ModalTitle } from "@/shared/components/Modal/styles";
import {
  Description,
  Explanation,
  ExplanationBody,
  ExplanationTitle,
  HelpCard,
  HelpSubtitle,
  IconContainer,
  InnerHelpContainer,
  TitleInfo,
} from "./styles";

type HelpProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const Help = ({ isOpen, setIsOpen }: HelpProps) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ModalTitle>Help</ModalTitle>
      <TitleInfo>Explanation of symbols used</TitleInfo>
      <InnerHelpContainer>
        <HelpCard>
          <HelpSubtitle>Role type</HelpSubtitle>
          <Description>
            Roles represent the profiles of actors participating in the collaborative process (i.e.
            the autonomous units). There are three stereotypes of actors:
          </Description>
          <Explanation>
            <IconContainer>
              <Icon type="human-internal" size={30} color="$primaryAccent" />
            </IconContainer>
            <span>
              <ExplanationTitle>Human Actor: </ExplanationTitle>
              <ExplanationBody>
                Person that uses the system services to play a certain role during the collaboration
                process.
              </ExplanationBody>
            </span>
          </Explanation>
          <Explanation>
            <IconContainer>
              <Icon type="service-internal" size={30} color="$primaryAccent" />
            </IconContainer>
            <span>
              <ExplanationTitle>Autonomous agent: </ExplanationTitle>
              <ExplanationBody>
                Autonomous software component that behaves according to a preset list of actions.
              </ExplanationBody>
            </span>
          </Explanation>
          <Explanation>
            <IconContainer>
              <Icon type="repository-internal" size={30} color="$primaryAccent" />
            </IconContainer>
            <span>
              <ExplanationTitle>Repository: </ExplanationTitle>
              <ExplanationBody>
                Passive software component that only stores data and produces answers to requests
                that were triggered by human actors or autonomous agents.
              </ExplanationBody>
            </span>
          </Explanation>
        </HelpCard>
        <HelpCard>
          <HelpSubtitle>Link type</HelpSubtitle>
          <Description>
            Links are used to represent the needs and also the interaction capabilities between two
            actors.
          </Description>
          <Explanation>
            <IconContainer>
              <Icon type="line" size={30} color="$primaryAccent" />
            </IconContainer>
            <span>
              <ExplanationTitle>Interaction: </ExplanationTitle>
              <ExplanationBody>
                There is an interaction between two nodes. This means that one participant requires
                communication with the other. A link on the same node (cycle) represents an
                interaction among actors playing the same role.
              </ExplanationBody>
            </span>
          </Explanation>
          <Explanation>
            <IconContainer>
              <Icon type="dash" size={30} color="$primaryAccent" />
            </IconContainer>
            <span>
              <ExplanationTitle>Is-a relationship: </ExplanationTitle>
              <ExplanationBody>
                The end node without an arrow (son role) can play the end role with a white arrow
                (father role). Both roles in the relationship must be of the same type (cycles are
                not allowed when this link is used).
              </ExplanationBody>
            </span>
          </Explanation>
        </HelpCard>
        <HelpCard>
          <HelpSubtitle>Number of participants per role</HelpSubtitle>
          <Description>
            Each role is labeled to represent the number of participants per role.
          </Description>
          <Explanation>
            <IconContainer>0..*</IconContainer>
            <span>
              <ExplanationTitle>Zero to many: </ExplanationTitle>
              <ExplanationBody>
                The number of role instances to conduct the process can be zero or a higher number
                (i.e the role is optional).
              </ExplanationBody>
            </span>
          </Explanation>
          <Explanation>
            <IconContainer>0..1</IconContainer>
            <span>
              <ExplanationTitle>Zero or one: </ExplanationTitle>
              <ExplanationBody>
                The number of role instances to conduct the process can be zero or one (i.e the role
                is optional).
              </ExplanationBody>
            </span>
          </Explanation>
          <Explanation>
            <IconContainer>1</IconContainer>
            <span>
              <ExplanationTitle>Exactly one: </ExplanationTitle>
              <ExplanationBody>
                The number of role instances to conduct the process must be exactly one (i.e the
                role is mandatory).
              </ExplanationBody>
            </span>
          </Explanation>
          <Explanation>
            <IconContainer>1..*</IconContainer>
            <span>
              <ExplanationTitle>One to many: </ExplanationTitle>
              <ExplanationBody>
                The number of role instances to conduct the process must be atleast one (i.e the
                role is mandatory).
              </ExplanationBody>
            </span>
          </Explanation>
          <Explanation>
            <IconContainer>?</IconContainer>
            <span>
              <ExplanationTitle>Undefined: </ExplanationTitle>
              <ExplanationBody>
                The number of role instances is unknown or not defined yet.
              </ExplanationBody>
            </span>
          </Explanation>
        </HelpCard>
        <HelpCard>
          <HelpSubtitle>User type</HelpSubtitle>
          <Description>
            The user type is visually labeled according to the application use for each node, which
            aims to specify whether the user will use the application in development or not.
            Although this information is represented here with a human actor figure, the same
            representation applies for the other node types.
          </Description>
          <Explanation>
            <IconContainer>
              <Icon type="human-internal" size={30} color="$primaryAccent" />
            </IconContainer>
            <span>
              <ExplanationTitle>Internal user: </ExplanationTitle>
              <ExplanationBody>
                The users of the role will use the collaborative application in development to
                interact.
              </ExplanationBody>
            </span>
          </Explanation>
          <Explanation>
            <IconContainer>
              <Icon type="human-external" size={30} color="$primaryAccent" />
            </IconContainer>
            <span>
              <ExplanationTitle>External user: </ExplanationTitle>
              <ExplanationBody>
                The users of the role will not use the collaborative application in development to
                interact (i.e they possibly use an external application).
              </ExplanationBody>
            </span>
          </Explanation>
          <Explanation>
            <IconContainer>
              <Icon type="human-both" size={30} color="$primaryAccent" />
            </IconContainer>
            <span>
              <ExplanationTitle>Internal/external user: </ExplanationTitle>
              <ExplanationBody>
                The users of the role will use the collaborative application in development, an
                external application, or a mix of both to interact.
              </ExplanationBody>
            </span>
          </Explanation>
        </HelpCard>
        <HelpCard>
          <HelpSubtitle>Abstract roles</HelpSubtitle>
          <Description>
            In is-a relationships, the abstract roles are visually labeled above their name. By
            default, a role is considered concrete. When a role is specified as abstract in an is-a
            relationship, it means this role will not be instantiable, that is, it will not have its
            own actors performing the role and must use actors of the &#34;children&#34; roles to
            carry out its activities.
          </Description>
          <Description>
            By default, each role is a contrete role, and the abstract tag is not shown.
          </Description>
        </HelpCard>
      </InnerHelpContainer>
      <ModalFooterContainer>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </ModalFooterContainer>
    </Modal>
  );
};
