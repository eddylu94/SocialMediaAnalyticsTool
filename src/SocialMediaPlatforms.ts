export enum SocialMediaPlatform {
    HOME = 0,
    FACEBOOK = 1,
    INSTAGRAM = 2,
    TWITTER = 3
}

export function getSocialMediaPlatformString(index: SocialMediaPlatform) {
    switch(index) {
        case SocialMediaPlatform.FACEBOOK:
            return "Facebook";
        case SocialMediaPlatform.INSTAGRAM:
            return "Instagram";
        case SocialMediaPlatform.TWITTER:
            return "Twitter";
        default:
            return "Home"
    }
}