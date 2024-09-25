import * as React from 'react'
import { cn } from '../../lib/utils'

type CardSize = 'md' | 'lg'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg'
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ size = 'md', className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'p-6 border bg-gray-900',
        size === 'lg' ? 'space-y-10' : 'space-y-4',
        className,
      )}
      {...props}
    />
  ),
)
Card.displayName = 'Card'

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5', className)} {...props} />
  ),
)
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2 ref={ref} className={cn('leading-none tracking-tight', className)} {...props} />
  ),
)
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => <p ref={ref} className={cn('text-sm', className)} {...props} />)
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('', className)} {...props} />,
)
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center ', className)} {...props} />
  ),
)
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
