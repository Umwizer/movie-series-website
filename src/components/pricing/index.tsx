import styled from 'styled-components';
import pricing_b from "../../assets/images/pricing/pricing-b.png";
import pricing_sug from "../../assets/images/pricing/pricing-sug.png";
import { Button } from '../ui/button';
import { HiShoppingBag } from "react-icons/hi2";

export const Pricing = () => {
    return (
        <PricingSection id="pricing">
            <PricingGrid>

                {/* ---------- BASIC ---------- */}
                <PricingCard>
                    <CardImage src={pricing_b} alt=""  $suggested={false}/>
                    <CardContent>
                        <HeaderBlock $suggested={false}>
                            <CategoryTitle $color="#228ee5">Basic</CategoryTitle>
                            <DurationText $color="rgba(34, 142, 229, 0.85)">3month</DurationText>
                        </HeaderBlock>

                        <ContentBlock>
                            <CostWrapper>
                                <CostContainer>
                                    <CostText $color="#228ee5">$15.140</CostText>
                                </CostContainer>
                            </CostWrapper>

                            <FeatureNote $color="rgba(34, 142, 229, 0.85)">
                                <li>Cancel anytime</li>
                            </FeatureNote>
                        </ContentBlock>

                        <ButtonWrapper $suggested={false}>
                            <Button
                                label="CONTINUE"
                                size="md"
                                variant="info"
                                activeColor="#228ee5"
                                onClick={() => console.log("Selected Basic")}
                                leftIcon={<HiShoppingBag size={18} />}
                            />
                        </ButtonWrapper>
                    </CardContent>
                </PricingCard>

                {/* ---------- SUGGESTED ---------- */}
                <PricingCard>
                    <CardImage src={pricing_sug} alt=""  $suggested={true}/>
                    <CardContent>
                        <HeaderBlock $suggested={true}>
                            <CategoryTitle $color="#ffffff">Suggested</CategoryTitle>
                            <DurationText $color="rgba(255, 255, 255, 0.85)">6month</DurationText>
                        </HeaderBlock>

                        <ContentBlock>
                            <CostWrapper>
                                <CostContainer>
                                    <OriginalCost $color="rgba(255, 255, 255, 0.85)">$24.990</OriginalCost>
                                    <CostText $color="#ffffff">$22.990</CostText>
                                </CostContainer>
                            </CostWrapper>

                            <FeatureNote $color="rgba(255, 255, 255, 0.85)">
                                <li>Cancel anytime</li>
                            </FeatureNote>
                        </ContentBlock>

                        <ButtonWrapper $suggested={true}>
                            <Button
                                label="CONTINUE"
                                size="md"
                                variant={'info'}
                                activeColor="#ffffff"
                                onClick={() => console.log("Selected Suggested")}
                                leftIcon={<HiShoppingBag size={18} />}
                            />
                        </ButtonWrapper>
                    </CardContent>
                </PricingCard>

                <PricingCard>
                    <CardImage src={pricing_b} alt=""  $suggested={false}/>
                    <CardContent>
                        <HeaderBlock $suggested={false}>
                            <CategoryTitle $color="#228ee5">Premium</CategoryTitle>
                            <DurationText $color="rgba(34, 142, 229, 0.85)">12month</DurationText>
                        </HeaderBlock>

                        <ContentBlock>
                            <CostWrapper>
                                <CostContainer>
                                    <CostText $color="#228ee5">$35.199</CostText>
                                </CostContainer>
                            </CostWrapper>

                            <FeatureNote $color="rgba(34, 142, 229, 0.85)">
                                <li>Cancel anytime</li>
                            </FeatureNote>
                        </ContentBlock>

                        <ButtonWrapper $suggested={false}>
                            <Button
                                label="CONTINUE"
                                size="md"
                                variant="info"
                                activeColor="#228ee5"
                                onClick={() => console.log("Selected Premium")}
                                leftIcon={<HiShoppingBag size={18} />}
                            />
                        </ButtonWrapper>
                    </CardContent>
                </PricingCard>

            </PricingGrid>
        </PricingSection>
    );
};

const PricingSection = styled.section`
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PricingGrid = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 36px;
    width: 100%;
    max-width: 1200px;
    flex-wrap: wrap;
`;

const PricingCard = styled.div`
    position: relative;
    width: 320px;
    height: auto;
    border-radius: 24px;
    cursor: pointer;
    transition: transform 0.35s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.35s ease;

    &:hover {
        transform: translateY(-10px) scale(1.03);
    }
`;

/* The actual <img> element, positioned to fill the card behind the content */
const CardImage = styled.img<{$suggested: boolean}>`
    display: block;
    width: 100%;
    height: ${props => props.$suggested ? "105vh" : "75vh"};
    border-radius: 24px;
`;

/* Content sits above the image */
const CardContent = styled.div`
    position: absolute;
    inset: 0;
    z-index: 1;
    padding: 24px 24px 28px 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const HeaderBlock = styled.div<{ $suggested?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 4px;
    padding-top: ${props => (props.$suggested ? "9em" : "3.5em")};
    width: 100%;
`;

const CategoryTitle = styled.h2<{ $color: string}>`
    color: ${props => props.$color};
    font-size: 2rem;
    font-weight: 500;
    margin: 0;
    letter-spacing: 0.5px;
    white-space: nowrap;
`;

const DurationText = styled.div<{ $color: string }>`
    color: ${props => props.$color};
    font-size: 1.05rem;
    font-weight: 300;
    letter-spacing: 0.3px;
    padding-top: 16px;
`;

const ContentBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-top: auto;
    margin-bottom: 24px;
`;

const ButtonWrapper = styled.div<{ $suggested?: boolean }>`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 0;
    margin-bottom: ${props => props.$suggested ? "8em" : "2.5em"};
`;

const CostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
`;

const CostText = styled.div<{ $color: string }>`
    color: ${props => props.$color};
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 1.1;
    white-space: nowrap;
`;

const OriginalCost = styled.div<{ $color: string }>`
    color: ${props => props.$color};
    padding-bottom: 20px;
    font-size: 2.5rem;
    text-decoration: line-through;
    font-weight: 500;
    opacity: 0.75;
    white-space: nowrap;
`;

const FeatureNote = styled.div<{ $color: string }>`
    color: ${props => props.$color};
    font-size: 0.95rem;
    font-weight: 300;
    margin-top: 4px;
    list-style-position: inside;
`;
