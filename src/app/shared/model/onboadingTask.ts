export interface OnBoardingTask {
  name: string;
  link: string;
}

export const navigatingBar: OnBoardingTask[] = [
  {
    name: 'Change Detection OnPush',
    link: '/changeDetectionOnPush',
  },
  {
    name: 'ng-content, ng-template and ng-container',
    link: '/templates',
  },
]
