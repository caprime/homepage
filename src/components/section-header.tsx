import React from "react"

import { COLORS } from "../styles/constants"

interface IProps {
  title: string
  description: string
}

const SectionHeader: React.FC<IProps> = ({ title, description }) => (
  <>
    <h2>{title}</h2>
    <p style={{ color: COLORS.mediumGray }}>{description}</p>
  </>
)

export default SectionHeader
