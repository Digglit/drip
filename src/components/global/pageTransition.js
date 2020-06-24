
export const pageTransition = {
  in: {
    opacity: 1,
    y: '0%'
  },
  out: {
    opacity: 0,
    x: '1%'
  },
  initial: {
    opacity: 0,
    y: '1%'
  }
}

export const modalTransition = {
  in: {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)'
  },
  out: {
    opacity: 0,
    transform: 'translate(-50%, -48%) scale(0.95)'
  },
  initial: {
    opacity: 0,
    transform: 'translate(-50%, -48%) scale(0.95)'
  }
}

export const transitionDuration = .2