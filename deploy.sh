#!/bin/bash

echo "Building Next.js application..."
npm run build

echo "Deploying to Firebase..."
firebase deploy

echo "Deployment complete!"
echo "Your site is now live at:"
echo "- https://your-project-id.web.app"
echo "- https://your-project-id.firebaseapp.com"
echo "- https://your-custom-domain.com (after DNS propagation)" 