import React, { useState } from 'react';
import styled from 'styled-components';
import { SectionHeader } from '../ui/SectionHeader';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "What is Solvit Cinema and how does it work?",
        answer: "Solvit Cinema is a premium streaming platform providing unlimited access to thousands of movies, exclusive series, anime, and documentary titles in HD and 4K Ultra HD."
    },
    {
        question: "Can I watch offline on mobile devices?",
        answer: "Yes! Our Suggested and Premium passes allow you to download your favorite movies and episodes onto iOS and Android devices for offline viewing anytime."
    },
    {
        question: "How do I upgrade or cancel my subscription?",
        answer: "You can change or cancel your pass anytime directly from your account settings with zero cancellation fees or hidden charges."
    },
    {
        question: "What video resolutions and audio formats are supported?",
        answer: "We support HD (720p), Full HD (1080p), and Ultra HD (4K HDR) streaming paired with immersive Dolby Atmos and 5.1 Surround Sound audio."
    },
    {
        question: "How many devices can stream simultaneously?",
        answer: "Depending on your plan, you can stream on 1 screen (Basic), 2 screens (Suggested), or up to 4 screens simultaneously with the Premium Pass."
    }
];

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <FAQSection id="faq">
            <SectionHeader title="Frequently Asked Questions" withOutline={true} withBorder={false} />
            <FAQContainer>
                {faqData.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <FAQCard key={index} $isOpen={isOpen} onClick={() => toggleAccordion(index)}>
                            <QuestionRow>
                                <QuestionText>{item.question}</QuestionText>
                                <IconWrapper>
                                    {isOpen ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
                                </IconWrapper>
                            </QuestionRow>
                            {isOpen && <AnswerText>{item.answer}</AnswerText>}
                        </FAQCard>
                    );
                })}
            </FAQContainer>
        </FAQSection>
    );
};

const FAQSection = styled.section`
    background-color: #030a1b;
    width: 100%;
    padding: 60px 50px 80px 50px;
    box-sizing: border-box;
    position: relative;
    z-index: 2;
`;

const FAQContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 900px;
    margin: 20px auto 0 auto;
`;

const FAQCard = styled.div<{ $isOpen: boolean }>`
    background: rgba(9, 12, 16, 0.85);
    border: 1px solid ${props => props.$isOpen ? '#006486' : 'rgba(255, 255, 255, 0.1)'};
    border-radius: 16px;
    padding: 20px 24px;
    cursor: pointer;
    backdrop-filter: blur(12px);
    transition: all 0.3s ease;

    &:hover {
        border-color: #006486;
        background: rgba(15, 20, 28, 0.95);
    }
`;

const QuestionRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
`;

const QuestionText = styled.h3`
    color: #ffffff;
    font-size: 1.15rem;
    font-weight: 600;
    margin: 0;
`;

const IconWrapper = styled.div`
    color: #ec5baa;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`;

const AnswerText = styled.p`
    color: rgba(255, 255, 255, 0.75);
    font-size: 0.98rem;
    line-height: 1.6;
    margin: 14px 0 0 0;
    padding-top: 14px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
`;
