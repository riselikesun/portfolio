import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { BlobImage } from './blob-image'
import config from '@/app/config'

vi.mock('next/image', () => ({
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />
  }
}))

vi.mock('@/app/config', () => ({
  default: {
    blobBaseUrl: 'https://test-blob-url.com'
  }
}))

describe('BlobImage component', () => {
  it('renders absolute URLs without modification', () => {
    render(<BlobImage src="https://example.com/image.png" alt="Test Image" />)
    const img = screen.getByAltText('Test Image')
    expect(img).toHaveAttribute('src', 'https://example.com/image.png')
  })

  it('renders relative URLs by prepending blobBaseUrl', () => {
    render(<BlobImage src="/images/local.png" alt="Local Image" />)
    const img = screen.getByAltText('Local Image')
    expect(img).toHaveAttribute('src', 'https://test-blob-url.com/images/local.png')
  })

  it('adds leading slash to relative URLs if missing', () => {
    render(<BlobImage src="images/local2.png" alt="Local Image 2" />)
    const img = screen.getByAltText('Local Image 2')
    expect(img).toHaveAttribute('src', 'https://test-blob-url.com/images/local2.png')
  })
})
