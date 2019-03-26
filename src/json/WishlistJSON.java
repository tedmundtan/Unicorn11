import java.util.*;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet(name = "wishlist", urlPatterns = {"/json/projections"})
public class WishlistJSON extends HttpServlet {
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, SQLException  {
        response.setContentType("text/html;charset=UTF-8");

        PrintWriter out = response.getWriter();
        HttpSession session = request.getSession();

        Gson gson = new GsonBuilder().setPrettyPrinting().create();

        //Create "outer" json object
        JsonObject jsonOutput = new JsonObject();
        //Create json object to store all errors
        JsonObject jsonErrors = new JsonObject();

        HashMap<String, String> input = new HashMap<>();
        String itemName = request.getParameter("itemName");
        String amount = request.getParameter("amount");
        String targetDate = request.getParameter("targetDate");
        input.put("itemName",itemName);
        input.put("amount", amount);
        input.put("targetDate",targetDate);

        // Get Wishlist data output
        HashMap<String, String> wishList = getWishListItem(input);


        String output = "";
        String dateProjected = wishList.get("dateProjected");
        String message = wishList.get("message");

        jsonOutput.addProperty("itemName", itemName);
        jsonOutput.addProperty("amount", amount);
        jsonOutput.addProperty("dateProjected", dateProjected);
        jsonOutput.addProperty("message", message);

        output = gson.toJson(jsonOutput);
        out.println(output);
    }
    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
}