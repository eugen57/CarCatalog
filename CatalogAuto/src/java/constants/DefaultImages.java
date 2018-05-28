package constants;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
//import java.nio.file.Files;
import javax.imageio.ImageIO;
import org.apache.ibatis.io.Resources;

public class DefaultImages {
  
    public static byte[] getDefaultCarImage() throws IOException {
        File file = Resources.getResourceAsFile("images/noavatar.png");
        
        BufferedImage originalImage = ImageIO.read(file);
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(originalImage, "png", baos );
        byte[] imageInByte = baos.toByteArray();
        return imageInByte;
    }
    
//    public static byte[] getDefaultCarImage() throws IOException {
//        File file = new File("C:\\Users\\Бенке РР\\CatalogAuto\\CatalogAuto\\web\\lib\\images\\noavatar.png");
//        byte[] fileContent = Files.readAllBytes(file.toPath());
//        return fileContent;
//    }
}

