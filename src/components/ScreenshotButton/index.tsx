import { Trash } from "phosphor-react-native";
import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { theme } from "../../theme";

import { styles } from "./styles";

interface ScreenshotButtonProps {
    screenshoot: string | null;
    onTakeShot: () => void;
    onRemoveShot: () => void;
}

export function ScreenshotButton({ screenshoot, onTakeShot, onRemoveShot }: ScreenshotButtonProps) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={screenshoot ? onRemoveShot : onTakeShot}
        >
    
        </TouchableOpacity>
    )
}