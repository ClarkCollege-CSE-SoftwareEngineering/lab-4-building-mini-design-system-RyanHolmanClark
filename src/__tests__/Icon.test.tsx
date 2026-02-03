import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react'
import { colors } from '../tokens';
import { Icon } from '../components/atoms'

describe('icon', () => {
    it('uses neutral gray when color is not set', () => {
        render(<Icon name="check" />)
        const icon = screen.getByRole('img', { hidden: true })
        expect(icon).toHaveAttribute('stroke', colors.neutral.gray600)
    })
})